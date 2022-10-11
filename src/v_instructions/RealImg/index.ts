export default {
  async beforeMount(el: HTMLImageElement, binding: any) {
    const imgURL = binding.value;

    if (imgURL) {
      /* 我们也新建一个Image对象来加载这个图片路径，
      如果能加载成功，再将绑定的el的src修改成这个地址，否则不设置 */
      const exist = await imageIsExist(imgURL);
      exist && el.setAttribute("src", imgURL);
    }

    function imageIsExist(url: string) {
      return new Promise((resolve) => {
        let img: HTMLImageElement | null = new Image();
        img.src = url;
        img.onload = () => {
          // img.complete 布尔值 代表图片是否加载完成
          if (img && img.complete) {
            resolve(true);
            img = null;
          }
        };
        img.onerror = () => {
          resolve(false);
          img = null;
        };
      });
    }
  },
};
