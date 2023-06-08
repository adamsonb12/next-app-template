import { IncomingMessage, ServerResponse } from "http";

import { StarterService } from "../services/starter";

export class HttpContext {
  _req: IncomingMessage;
  _res: ServerResponse;

  _starterService?: StarterService;
  userId: string = "";

  static async init(req: IncomingMessage, res: ServerResponse) {
    // @ts-ignore - How to type a userId on the request??
    return new HttpContext(req, res, req.userId);
  }

  private constructor(
    req: IncomingMessage,
    res: ServerResponse,
    userId: string
  ) {
    this._req = req;
    this._res = res;
    this.userId = userId;
  }

  starterService() {
    if (!this._starterService) {
      this._starterService = new StarterService();
    }

    return this._starterService;
  }
}
