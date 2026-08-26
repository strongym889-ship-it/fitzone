import 'package:shared_preferences/shared_preferences.dart';

import '../models/user_model.dart';
import 'api_service.dart';

class AuthService {
  final ApiService _apiService = ApiService();

  Future<UserModel> login({
    required String email,
    required String password,
  }) async {
    final response = await _apiService.post(
      '/users/login',
      {
        'email': email,
        'password': password,
      },
    );

    final token = response['token']?.toString();

    if (token == null || token.isEmpty) {
      throw Exception('El servidor no devolvió el token');
    }

    final usuarioJson = response['usuario'];

    if (usuarioJson == null) {
      throw Exception('El servidor no devolvió los datos del usuario');
    }

    final usuario = UserModel.fromJson(
      Map<String, dynamic>.from(usuarioJson),
    );

    final prefs = await SharedPreferences.getInstance();

    await prefs.setString('token', token);
    await prefs.setString('usuarioId', usuario.id);
    await prefs.setString('nombre', usuario.nombre);
    await prefs.setString('email', usuario.email);

    return usuario;
  }

  Future<UserModel> register({
    required String nombre,
    required String email,
    required String password,
  }) async {
    final response = await _apiService.post(
      '/users/register',
      {
        'nombre': nombre,
        'email': email,
        'password': password,
      },
    );

    final usuarioJson = response['usuario'];

    if (usuarioJson == null) {
      throw Exception('El servidor no devolvió los datos del usuario');
    }

    return UserModel.fromJson(
      Map<String, dynamic>.from(usuarioJson),
    );
  }

  Future<String> forgotPassword({
    required String email,
  }) async {
    final response = await _apiService.post(
      '/users/forgot-password',
      {
        'email': email,
      },
    );

    return response['mensaje']?.toString() ??
        'Se enviaron las instrucciones a tu correo';
  }

  Future<void> logout() async {
    final prefs = await SharedPreferences.getInstance();

    await prefs.remove('token');
    await prefs.remove('usuarioId');
    await prefs.remove('nombre');
    await prefs.remove('email');
  }

  Future<String?> getToken() async {
    final prefs = await SharedPreferences.getInstance();

    return prefs.getString('token');
  }
}