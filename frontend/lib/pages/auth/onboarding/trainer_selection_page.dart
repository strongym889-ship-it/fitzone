import 'package:flutter/material.dart';

class TrainerSelectionPage extends StatefulWidget {
  const TrainerSelectionPage({super.key});

  @override
  State<TrainerSelectionPage> createState() => _TrainerSelectionPageState();
}

class _TrainerSelectionPageState extends State<TrainerSelectionPage> {
  static const Color fitZoneCyan = Color(0xFF00D9FF);
  static const Color fitZoneTurquoise = Color(0xFF00C9B7);

  int? selectedTrainer;

  final List<Map<String, dynamic>> trainers = [
    {
      'name': 'Ana Martínez',
      'specialty': 'Hipertrofia y Fuerza',
      'rating': '4.9',
      'experience': '8 años',
      'price': '\$89',
      'description':
          'Especialista en desarrollo muscular y programas de fuerza adaptados a cada nivel.',
      'certifications': [
        'NSCA-CPT',
        'ISSA Bodybuilding',
        'Nutrición Deportiva',
      ],
    },
    {
      'name': 'Carlos Rodríguez',
      'specialty': 'Recomposición Corporal',
      'rating': '4.8',
      'experience': '10 años',
      'price': '\$129',
      'description':
          'Experto en transformación física combinando entrenamiento y nutrición estratégica.',
      'certifications': [
        'ACE',
        'Precision Nutrition Level 2',
        'NASM-PES',
      ],
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: SafeArea(
        child: Column(
          children: [
            // CONTENIDO
            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.symmetric(
                  horizontal: 14,
                  vertical: 20,
                ),
                child: Column(
                  children: [
                    const SizedBox(height: 5),

                    // PASO
                    const Text(
                      'Paso 2 de 7',
                      style: TextStyle(
                        color: fitZoneCyan,
                        fontSize: 14,
                        fontWeight: FontWeight.bold,
                      ),
                    ),

                    const SizedBox(height: 20),

                    // TITULO
                    const Text(
                      'Selecciona tu Entrenador',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 28,
                        fontWeight: FontWeight.bold,
                      ),
                    ),

                    const SizedBox(height: 8),

                    const Text(
                      'Elige al profesional que mejor se adapte a ti',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        color: Colors.white70,
                        fontSize: 16,
                      ),
                    ),

                    const SizedBox(height: 28),

                    // ¿POR QUÉ NECESITAS UN ENTRENADOR?
                    Container(
                      width: double.infinity,
                      padding: const EdgeInsets.all(18),
                      decoration: BoxDecoration(
                        color: const Color(0xFF00191C),
                        borderRadius: BorderRadius.circular(16),
                        border: Border.all(
                          color: fitZoneCyan.withOpacity(0.45),
                        ),
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text(
                            '¿Por qué necesitas un entrenador?',
                            style: TextStyle(
                              color: fitZoneCyan,
                              fontSize: 18,
                              fontWeight: FontWeight.bold,
                            ),
                          ),

                          const SizedBox(height: 18),

                          Row(
                            children: [
                              Expanded(
                                child: _benefitCard(
                                  '🎯',
                                  'Mayor Personalización',
                                  'Plan 100% adaptado a tus necesidades, objetivos y condiciones específicas',
                                ),
                              ),
                              const SizedBox(width: 14),
                              Expanded(
                                child: _benefitCard(
                                  '🛡️',
                                  'Reducción de Lesiones',
                                  'Supervisión profesional que minimiza riesgos y corrige tu técnica',
                                ),
                              ),
                            ],
                          ),

                          const SizedBox(height: 14),

                          Row(
                            children: [
                              Expanded(
                                child: _benefitCard(
                                  '📈',
                                  'Mejor Progreso',
                                  'Resultados más rápidos y efectivos con seguimiento constante',
                                ),
                              ),
                              const SizedBox(width: 14),
                              Expanded(
                                child: _benefitCard(
                                  '💼',
                                  'Plan Profesional',
                                  'Programación científica basada en evidencia y experiencia certificada',
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(height: 25),

                    // ENTRENADORES
                    Column(
                      children: List.generate(
                        trainers.length,
                        (index) => _trainerCard(
                          trainer: trainers[index],
                          index: index,
                        ),
                      ),
                    ),

                    const SizedBox(height: 20),
                  ],
                ),
              ),
            ),

            // BOTONES INFERIORES
            Container(
              padding: const EdgeInsets.fromLTRB(20, 12, 20, 18),
              color: Colors.black,
              child: Row(
                children: [
                  Expanded(
                    child: OutlinedButton.icon(
                      onPressed: () {
                        Navigator.pop(context);
                      },
                      icon: const Icon(
                        Icons.arrow_back,
                        color: Colors.white,
                      ),
                      label: const Text(
                        'Anterior',
                        style: TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      style: OutlinedButton.styleFrom(
                        minimumSize: const Size(0, 56),
                        side: BorderSide(
                          color: Colors.white.withOpacity(0.15),
                        ),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(16),
                        ),
                      ),
                    ),
                  ),

                  const SizedBox(width: 14),

                  Expanded(
                    child: ElevatedButton.icon(
                      onPressed: selectedTrainer == null
                          ? null
                          : () {
                              // Aquí después conectaremos con
                              // la pantalla de método de pago.
                            },
                      icon: const Icon(Icons.arrow_forward),
                      label: const Text(
                        'Siguiente',
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      style: ElevatedButton.styleFrom(
                        minimumSize: const Size(0, 56),
                        backgroundColor: fitZoneTurquoise,
                        foregroundColor: Colors.black,
                        disabledBackgroundColor:
                            const Color(0xFF07545A),
                        disabledForegroundColor: Colors.white54,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(16),
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
    );
  }

  Widget _benefitCard(
    String icon,
    String title,
    String description,
  ) {
    return Container(
      constraints: const BoxConstraints(
        minHeight: 100,
      ),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: const Color(0xFF001417),
        borderRadius: BorderRadius.circular(16),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(
            icon,
            style: const TextStyle(fontSize: 24),
          ),

          const SizedBox(height: 8),

          Text(
            title,
            textAlign: TextAlign.center,
            style: const TextStyle(
              color: Colors.white,
              fontSize: 14,
              fontWeight: FontWeight.bold,
            ),
          ),

          const SizedBox(height: 5),

          Text(
            description,
            textAlign: TextAlign.center,
            style: const TextStyle(
              color: Colors.white70,
              fontSize: 11,
            ),
          ),
        ],
      ),
    );
  }

  Widget _trainerCard({
    required Map<String, dynamic> trainer,
    required int index,
  }) {
    final bool selected = selectedTrainer == index;

    return GestureDetector(
      onTap: () {
        setState(() {
          selectedTrainer = index;
        });
      },
      child: Container(
        width: double.infinity,
        margin: const EdgeInsets.only(bottom: 16),
        padding: const EdgeInsets.all(18),
        decoration: BoxDecoration(
          color: const Color(0xFF0B0B0B),
          borderRadius: BorderRadius.circular(18),
          border: Border.all(
            color: selected
                ? fitZoneCyan
                : Colors.white.withOpacity(0.15),
            width: selected ? 2 : 1,
          ),
        ),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // FOTO / ICONO
            Container(
              width: 70,
              height: 70,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: const Color(0xFF222222),
                border: Border.all(
                  color: fitZoneCyan.withOpacity(0.3),
                ),
              ),
              child: const Icon(
                Icons.person,
                color: Colors.white70,
                size: 38,
              ),
            ),

            const SizedBox(width: 16),

            // INFORMACIÓN
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    trainer['name'],
                    style: const TextStyle(
                      color: Colors.white,
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                    ),
                  ),

                  const SizedBox(height: 3),

                  Text(
                    trainer['specialty'],
                    style: const TextStyle(
                      color: fitZoneCyan,
                      fontSize: 13,
                      fontWeight: FontWeight.bold,
                    ),
                  ),

                  const SizedBox(height: 8),

                  Row(
                    children: [
                      const Icon(
                        Icons.star,
                        color: Colors.amber,
                        size: 18,
                      ),
                      const SizedBox(width: 4),
                      Text(
                        trainer['rating'],
                        style: const TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(width: 12),
                      Text(
                        trainer['experience'],
                        style: const TextStyle(
                          color: Colors.white70,
                          fontSize: 12,
                        ),
                      ),
                    ],
                  ),

                  const SizedBox(height: 10),

                  Text(
                    trainer['description'],
                    style: const TextStyle(
                      color: Colors.white70,
                      fontSize: 13,
                    ),
                  ),

                  const SizedBox(height: 12),

                  Wrap(
                    spacing: 7,
                    runSpacing: 7,
                    children: (trainer['certifications'] as List<String>)
                        .map(
                          (certification) => Container(
                            padding: const EdgeInsets.symmetric(
                              horizontal: 9,
                              vertical: 6,
                            ),
                            decoration: BoxDecoration(
                              color: const Color(0xFF252525),
                              borderRadius: BorderRadius.circular(20),
                            ),
                            child: Text(
                              certification,
                              style: const TextStyle(
                                color: Colors.white70,
                                fontSize: 10,
                              ),
                            ),
                          ),
                        )
                        .toList(),
                  ),
                ],
              ),
            ),

            const SizedBox(width: 10),

            // PRECIO
            Column(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                Text(
                  trainer['price'],
                  style: const TextStyle(
                    color: fitZoneCyan,
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                const Text(
                  '/mes',
                  style: TextStyle(
                    color: Colors.white70,
                    fontSize: 12,
                  ),
                ),

                const SizedBox(height: 12),

                if (selected)
                  const Icon(
                    Icons.check_circle,
                    color: fitZoneCyan,
                    size: 25,
                  ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}