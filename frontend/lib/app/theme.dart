import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

const Color fitZoneCyan = Color(0xFF00C4D9);
const Color fitZoneDark = Color(0xFF171717);
const Color fitZoneCard = Color(0xCC242424);

final ThemeData fitZoneTheme = ThemeData(
  useMaterial3: true,
  brightness: Brightness.dark,

  scaffoldBackgroundColor: Colors.black,

  colorScheme: ColorScheme.fromSeed(
    seedColor: fitZoneCyan,
    brightness: Brightness.dark,
  ),

  textTheme: GoogleFonts.poppinsTextTheme(
    ThemeData.dark().textTheme,
  ),

  inputDecorationTheme: InputDecorationTheme(
    filled: true,
    fillColor: Colors.transparent,

    border: OutlineInputBorder(
      borderRadius: BorderRadius.circular(30),
      borderSide: const BorderSide(
        color: Color(0xFF555555),
      ),
    ),

    enabledBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(30),
      borderSide: const BorderSide(
        color: Color(0xFF555555),
      ),
    ),

    focusedBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(30),
      borderSide: const BorderSide(
        color: fitZoneCyan,
        width: 1.5,
      ),
    ),
  ),
);