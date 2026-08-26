import 'package:flutter/material.dart';

import '../pages/auth/login_page.dart';
import '../pages/auth/register_page.dart';
import '../pages/auth/forgot_password_page.dart';
import '../pages/auth/onboarding/welcome_page.dart';

final Map<String, WidgetBuilder> appRoutes = {
  '/login': (context) => const LoginPage(),
  '/register': (context) => const RegisterPage(),
  '/forgot-password': (context) => const ForgotPasswordPage(),
  '/welcome': (context) => const WelcomePage(),
};