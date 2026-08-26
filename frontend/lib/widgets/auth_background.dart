import 'package:flutter/material.dart';

class AuthBackground extends StatelessWidget {
  final Widget child;

  const AuthBackground({
    super.key,
    required this.child,
  });

  static const String backgroundImage =
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48'
      '?auto=format&fit=crop&w=1600&q=85';

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Positioned.fill(
          child: Image.network(
            backgroundImage,
            fit: BoxFit.cover,
            errorBuilder: (context, error, stackTrace) {
              return Container(
                color: const Color(0xFF111111),
              );
            },
          ),
        ),

        Positioned.fill(
          child: Container(
            color: Colors.black.withValues(alpha: 0.72),
          ),
        ),

        Positioned.fill(
          child: Container(
            decoration: const BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: [
                  Color(0x44000000),
                  Color(0xCC000000),
                ],
              ),
            ),
          ),
        ),

        SafeArea(
          child: child,
        ),
      ],
    );
  }
}