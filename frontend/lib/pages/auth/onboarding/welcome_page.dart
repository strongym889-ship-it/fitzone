import 'package:flutter/material.dart';

class WelcomePage extends StatelessWidget {
  const WelcomePage({super.key});

  static const Color cyan = Color(0xFF00D9FF);
  static const Color turquoise = Color(0xFF00C9B7);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: SafeArea(
        child: LayoutBuilder(
          builder: (context, constraints) {
            return SingleChildScrollView(
              child: ConstrainedBox(
                constraints: BoxConstraints(
                  minHeight: constraints.maxHeight,
                ),
                child: Padding(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 24,
                    vertical: 20,
                  ),
                  child: Column(
                    children: [
                      const SizedBox(height: 5),

                      // PASO
                      const Text(
                        'Paso 1 de 7',
                        style: TextStyle(
                          color: cyan,
                          fontSize: 14,
                          fontWeight: FontWeight.w700,
                        ),
                      ),

                      const SizedBox(height: 28),

                      // LOGO
                      Container(
                        width: 84,
                        height: 84,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          color: cyan,
                          boxShadow: [
                            BoxShadow(
                              color: cyan.withOpacity(0.35),
                              blurRadius: 20,
                              spreadRadius: 2,
                            ),
                          ],
                        ),
                        child: const Center(
                          child: Icon(
                            Icons.fitness_center,
                            color: Colors.black,
                            size: 42,
                          ),
                        ),
                      ),

                      const SizedBox(height: 24),

                      // TITULO
                      const Text(
                        '¡Bienvenido a FitZone!',
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 29,
                          fontWeight: FontWeight.bold,
                        ),
                      ),

                      const SizedBox(height: 14),

                      // DESCRIPCION
                      const Text(
                        'Vamos a crear tu plan de entrenamiento\n'
                        'personalizado en solo unos pasos',
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          color: Colors.white70,
                          fontSize: 17,
                          height: 1.5,
                        ),
                      ),

                      const SizedBox(height: 38),

                      // TARJETA 1
                      _InfoCard(
                        icon: Icons.track_changes,
                        iconColor: cyan,
                        title: 'Objetivos Personalizados',
                        subtitle: 'Diseñado para tus metas',
                      ),

                      const SizedBox(height: 14),

                      // TARJETA 2
                      _InfoCard(
                        icon: Icons.monitor_heart_outlined,
                        iconColor: cyan,
                        title: 'Seguimiento Completo',
                        subtitle: 'Monitorea tu progreso',
                      ),

                      const SizedBox(height: 14),

                      // TARJETA 3
                      _InfoCard(
                        icon: Icons.workspace_premium_outlined,
                        iconColor: Colors.amber,
                        title: 'Entrenadores Profesionales',
                        subtitle: 'Expertos certificados',
                      ),

                      const SizedBox(height: 34),

                      const Text(
                        '¿Quieres probar primero?',
                        style: TextStyle(
                          color: Colors.white60,
                          fontSize: 14,
                        ),
                      ),

                      const SizedBox(height: 12),

                      // PLAN GRATIS
                      Container(
                        width: double.infinity,
                        height: 48,
                        decoration: BoxDecoration(
                          color: Colors.black,
                          borderRadius: BorderRadius.circular(24),
                          border: Border.all(
                            color: Colors.white12,
                          ),
                        ),
                        child: const Center(
                          child: Text(
                            'Iniciar Plan Gratis 3 Días',
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 14,
                              fontWeight: FontWeight.w600,
                            ),
                          ),
                        ),
                      ),

                      const SizedBox(height: 18),

                      // BOTON SIGUIENTE
                      SizedBox(
                        width: double.infinity,
                        height: 54,
                        child: ElevatedButton(
                          onPressed: () {
                            Navigator.pushNamed(
                              context,
                              '/trainers',
                            );
                          },
                          style: ElevatedButton.styleFrom(
                            backgroundColor: cyan,
                            foregroundColor: Colors.black,
                            elevation: 0,
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(15),
                            ),
                          ),
                          child: const Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text(
                                'Siguiente',
                                style: TextStyle(
                                  fontSize: 16,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              SizedBox(width: 10),
                              Icon(
                                Icons.arrow_forward,
                                size: 20,
                              ),
                            ],
                          ),
                        ),
                      ),

                      const SizedBox(height: 10),
                    ],
                  ),
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}


/// Tarjeta utilizada en la pantalla de bienvenida.
class _InfoCard extends StatelessWidget {
  final IconData icon;
  final Color iconColor;
  final String title;
  final String subtitle;

  const _InfoCard({
    required this.icon,
    required this.iconColor,
    required this.title,
    required this.subtitle,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(
        horizontal: 18,
        vertical: 17,
      ),
      decoration: BoxDecoration(
        color: const Color(0xFF0D0D0D),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(
          color: Colors.white12,
          width: 1,
        ),
      ),
      child: Row(
        children: [
          Icon(
            icon,
            color: iconColor,
            size: 27,
          ),

          const SizedBox(width: 16),

          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: const TextStyle(
                    color: Colors.white,
                    fontSize: 15,
                    fontWeight: FontWeight.bold,
                  ),
                ),

                const SizedBox(height: 4),

                Text(
                  subtitle,
                  style: const TextStyle(
                    color: Colors.white60,
                    fontSize: 13,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}