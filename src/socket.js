import { io } from "socket.io-client";

const socket = io("http://localhost:4050");
export default socket
