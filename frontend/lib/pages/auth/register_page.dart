import 'package:flutter/material.dart';

import '../../app/theme.dart';
import '../../services/api_service.dart';
import '../../services/auth_service.dart';
import '../../widgets/auth_background.dart';
import '../../widgets/auth_card.dart';
import '../../widgets/auth_text_field.dart';

class RegisterPage extends StatefulWidget {
  const RegisterPage({super.key});

  @override
  State<RegisterPage> createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  final nombreController = TextEditingController();
  final emailController = TextEditingController();
  final passwordController = TextEditingController();

  final AuthService authService = AuthService();

  bool obscurePassword = true;
  bool loading = false;

  @override
  void dispose() {
    nombreController.dispose();
    emailController.dispose();
    passwordController.dispose();
    super.dispose();
  }

  Future<void> crearCuenta() async {
    final nombre = nombreController.text.trim();
    final email = emailController.text.trim();
    final password = passwordController.text;

    if (nombre.isEmpty ||
        email.isEmpty ||
        password.isEmpty) {
      mostrarMensaje('Completa todos los campos');
      return;
    }

    if (password.length < 6) {
      mostrarMensaje(
        'La contraseña debe tener mínimo 6 caracteres',
      );
      return;
    }

    setState(() {
      loading = true;
    });

    try {
      await authService.register(
        nombre: nombre,
        email: email,
        password: password,
      );

      if (!mounted) return;

      mostrarMensaje(
        'Cuenta creada correctamente',
        success: true,
      );

      await Future.delayed(
        const Duration(milliseconds: 800),
      );

      if (!mounted) return;

      Navigator.pushReplacementNamed(
        context,
        '/login',
      );
    } on ApiException catch (e) {
      if (!mounted) return;

      mostrarMensaje(e.message);
    } catch (e) {
      if (!mounted) return;

      mostrarMensaje(
        'No se pudo conectar con el servidor',
      );
    } finally {
      if (mounted) {
        setState(() {
          loading = false;
        });
      }
    }
  }

  void mostrarMensaje(
    String mensaje, {
    bool success = false,
  }) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(mensaje),
        backgroundColor:
            success ? fitZoneCyan : Colors.redAccent,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: AuthBackground(
        child: Center(
          child: SingleChildScrollView(
            padding: const EdgeInsets.symmetric(
              horizontal: 24,
              vertical: 30,
            ),
            child: ConstrainedBox(
              constraints: const BoxConstraints(
                maxWidth: 430,
              ),
              child: Column(
                children: [
                  const _RegisterHeader(),

                  const SizedBox(height: 35),

                  AuthCard(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text(
                          'Crear Cuenta',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 23,
                            fontWeight: FontWeight.bold,
                          ),
                        ),

                        const SizedBox(height: 25),

                        const Text(
                          'Nombre completo',
                          style: TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.w600,
                          ),
                        ),

                        const SizedBox(height: 8),

                        AuthTextField(
                          controller: nombreController,
                          hintText: 'Tu nombre',
                          icon: Icons.person_outline,
                        ),

                        const SizedBox(height: 18),

                        const Text(
                          'Email',
                          style: TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.w600,
                          ),
                        ),

                        const SizedBox(height: 8),

                        AuthTextField(
                          controller: emailController,
                          hintText: 'tu@email.com',
                          icon: Icons.email_outlined,
                          keyboardType:
                              TextInputType.emailAddress,
                        ),

                        const SizedBox(height: 18),

                        const Text(
                          'Contraseña',
                          style: TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.w600,
                          ),
                        ),

                        const SizedBox(height: 8),

                        AuthTextField(
                          controller: passwordController,
                          hintText: '••••••••',
                          icon: Icons.lock_outline,
                          obscureText: obscurePassword,
                          onVisibilityPressed: () {
                            setState(() {
                              obscurePassword =
                                  !obscurePassword;
                            });
                          },
                        ),

                        const SizedBox(height: 25),

                        SizedBox(
                          width: double.infinity,
                          height: 52,
                          child: ElevatedButton(
                            onPressed:
                                loading ? null : crearCuenta,
                            style: ElevatedButton.styleFrom(
                              backgroundColor: fitZoneCyan,
                              foregroundColor: Colors.black,
                              disabledBackgroundColor:
                                  fitZoneCyan.withValues(
                                alpha: 0.5,
                              ),
                              shape:
                                  RoundedRectangleBorder(
                                borderRadius:
                                    BorderRadius.circular(30),
                              ),
                            ),
                            child: loading
                                ? const SizedBox(
                                    width: 22,
                                    height: 22,
                                    child:
                                        CircularProgressIndicator(
                                      strokeWidth: 2,
                                      color: Colors.black,
                                    ),
                                  )
                                : const Text(
                                    'Crear Cuenta',
                                    style: TextStyle(
                                      fontWeight:
                                          FontWeight.bold,
                                      fontSize: 14,
                                    ),
                                  ),
                          ),
                        ),

                        const SizedBox(height: 20),

                        Row(
                          children: [
                            const Expanded(
                              child: Divider(
                                color: Colors.white24,
                              ),
                            ),
                            const Padding(
                              padding:
                                  EdgeInsets.symmetric(
                                horizontal: 10,
                              ),
                              child: Text(
                                'O continuar con',
                                style: TextStyle(
                                  color: Colors.white54,
                                  fontSize: 11,
                                ),
                              ),
                            ),
                            const Expanded(
                              child: Divider(
                                color: Colors.white24,
                              ),
                            ),
                          ],
                        ),

                        const SizedBox(height: 18),

                        Row(
                          children: [
                            Expanded(
                              child: _SocialButton(
                                icon: Icons.g_mobiledata,
                                text: 'Google',
                                onPressed: () {
                                  mostrarMensaje(
                                    'Google todavía no está conectado',
                                  );
                                },
                              ),
                            ),
                            const SizedBox(width: 10),
                            Expanded(
                              child: _SocialButton(
                                icon: Icons.apple,
                                text: 'Apple',
                                onPressed: () {
                                  mostrarMensaje(
                                    'Apple todavía no está conectado',
                                  );
                                },
                              ),
                            ),
                          ],
                        ),

                        const SizedBox(height: 15),

                        Row(
                          mainAxisAlignment:
                              MainAxisAlignment.center,
                          children: [
                            const Text(
                              '¿Ya tienes cuenta?',
                              style: TextStyle(
                                color: Colors.white70,
                              ),
                            ),
                            TextButton(
                              onPressed: () {
                                Navigator.pushReplacementNamed(
                                  context,
                                  '/login',
                                );
                              },
                              child: const Text(
                                'Inicia sesión',
                                style: TextStyle(
                                  color: fitZoneCyan,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class _RegisterHeader extends StatelessWidget {
  const _RegisterHeader();

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          width: 70,
          height: 70,
          decoration: const BoxDecoration(
            color: fitZoneCyan,
            shape: BoxShape.circle,
          ),
          alignment: Alignment.center,
          child: const Text(
            'FZ',
            style: TextStyle(
              color: Colors.black,
              fontSize: 25,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),

        const SizedBox(height: 10),

        const Text(
          'FitZone',
          style: TextStyle(
            color: Colors.white,
            fontSize: 28,
            fontWeight: FontWeight.bold,
          ),
        ),

        const SizedBox(height: 2),

        const Text(
          'Tu entrenador personal digital',
          style: TextStyle(
            color: fitZoneCyan,
            fontSize: 12,
            fontWeight: FontWeight.w600,
          ),
        ),
      ],
    );
  }
}

class _SocialButton extends StatelessWidget {
  final IconData icon;
  final String text;
  final VoidCallback onPressed;

  const _SocialButton({
    required this.icon,
    required this.text,
    required this.onPressed,
  });

  @override
  Widget build(BuildContext context) {
    return OutlinedButton(
      onPressed: onPressed,
      style: OutlinedButton.styleFrom(
        foregroundColor: Colors.white,
        side: const BorderSide(
          color: Colors.white12,
        ),
        minimumSize: const Size(
          0,
          45,
        ),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(25),
        ),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(
            icon,
            size: 20,
          ),
          const SizedBox(width: 8),
          Text(
            text,
            style: const TextStyle(
              fontWeight: FontWeight.w600,
            ),
          ),
        ],
      ),
    );
  }
}