import { roleApis, pageApis } from "./systemMessage";
import { userApis } from "./userMessage";

export default [...userApis, ...pageApis, ...roleApis];
