import 'package:flutter/material.dart';

import '../../app/theme.dart';
import '../../services/api_service.dart';
import '../../services/auth_service.dart';
import '../../widgets/auth_background.dart';
import '../../widgets/auth_card.dart';
import '../../widgets/auth_text_field.dart';

class ForgotPasswordPage extends StatefulWidget {
  const ForgotPasswordPage({super.key});

  @override
  State<ForgotPasswordPage> createState() =>
      _ForgotPasswordPageState();
}

class _ForgotPasswordPageState
    extends State<ForgotPasswordPage> {
  final emailController = TextEditingController();

  final AuthService authService = AuthService();

  bool loading = false;

  @override
  void dispose() {
    emailController.dispose();
    super.dispose();
  }

  Future<void> enviarInstrucciones() async {
    final email = emailController.text.trim();

    if (email.isEmpty) {
      mostrarMensaje(
        'Escribe tu correo electrónico',
      );
      return;
    }

    setState(() {
      loading = true;
    });

    try {
      final mensaje = await authService.forgotPassword(
        email: email,
      );

      if (!mounted) return;

      mostrarMensaje(
        mensaje,
        success: true,
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
                  const _ForgotHeader(),

                  const SizedBox(height: 50),

                  AuthCard(
                    child: Column(
                      crossAxisAlignment:
                          CrossAxisAlignment.start,
                      children: [
                        const Text(
                          'Recuperar Contraseña',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 23,
                            fontWeight: FontWeight.bold,
                          ),
                        ),

                        const SizedBox(height: 25),

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

                        const SizedBox(height: 20),

                        SizedBox(
                          width: double.infinity,
                          height: 52,
                          child: ElevatedButton(
                            onPressed: loading
                                ? null
                                : enviarInstrucciones,
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
                                    'Enviar Instrucciones',
                                    style: TextStyle(
                                      fontWeight:
                                          FontWeight.bold,
                                      fontSize: 14,
                                    ),
                                  ),
                          ),
                        ),

                        const SizedBox(height: 15),

                        Center(
                          child: TextButton(
                            onPressed: () {
                              Navigator.pop(context);
                            },
                            child: const Text(
                              'Volver al inicio',
                              style: TextStyle(
                                color: fitZoneCyan,
                                fontWeight: FontWeight.w600,
                              ),
                            ),
                          ),
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

class _ForgotHeader extends StatelessWidget {
  const _ForgotHeader();

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