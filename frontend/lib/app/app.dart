import 'package:flutter/material.dart';
import 'routes.dart';
import 'theme.dart';

class FitZoneApp extends StatelessWidget {
  const FitZoneApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'FitZone',
      theme: fitZoneTheme,
      initialRoute: '/login',
      routes: appRoutes,
    );
  }
}