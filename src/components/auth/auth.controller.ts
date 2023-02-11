import { Controller, Post, Body, Delete, HttpCode, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateAuthDto } from "./auth.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("registration")
  registration(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.registration(createAuthDto);
  }

  @Post("login")
  login(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.login(createAuthDto);
  }

  @Delete("logout")
  @HttpCode(204)
  logout(@Request() req): any {
    console.log({ data: "LogOut" });
    //   req.logout((error) => {
    //     if (error) req.session.destroy();
    //   });
  }
}
