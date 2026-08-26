import 'dart:convert';

import 'package:http/http.dart' as http;

class ApiService {
  /*
    Android Emulator:
    10.0.2.2 apunta al computador donde está ejecutándose el backend.

    Si utilizas un celular físico, después cambia esto por la IP
    de tu computador, por ejemplo:

    http://192.168.1.10:4000/api
  */

  static const String baseUrl = 'http://10.0.2.2:4000/api';

  Future<Map<String, dynamic>> post(
    String endpoint,
    Map<String, dynamic> data, {
    String? token,
  }) async {
    final headers = {
      'Content-Type': 'application/json',
    };

    if (token != null && token.isNotEmpty) {
      headers['Authorization'] = 'Bearer $token';
    }

    final response = await http.post(
      Uri.parse('$baseUrl$endpoint'),
      headers: headers,
      body: jsonEncode(data),
    );

    Map<String, dynamic> responseData = {};

    if (response.body.isNotEmpty) {
      try {
        responseData = jsonDecode(response.body);
      } catch (_) {
        responseData = {
          'mensaje': response.body,
        };
      }
    }

    if (response.statusCode >= 200 && response.statusCode < 300) {
      return responseData;
    }

    throw ApiException(
      responseData['mensaje']?.toString() ??
          responseData['error']?.toString() ??
          'Ocurrió un error en el servidor',
      response.statusCode,
    );
  }
}

class ApiException implements Exception {
  final String message;
  final int statusCode;

  ApiException(this.message, this.statusCode);

  @override
  String toString() => message;
}