import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers as { user_id: string };
      const users = this.listAllUsersUseCase.execute({ user_id });
      return response.json(users).send();
    } catch (err) {
      return response.status(400).json({ error: err.message }).send();
    }
  }
}

export { ListAllUsersController };
