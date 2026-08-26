class UserModel {
  final String id;
  final String nombre;
  final String email;
  final String? telefono;
  final String rol;
  final String estadoCuenta;
  final String? entrenadorAsignado;
  final String? planActual;

  UserModel({
    required this.id,
    required this.nombre,
    required this.email,
    this.telefono,
    required this.rol,
    required this.estadoCuenta,
    this.entrenadorAsignado,
    this.planActual,
  });

  factory UserModel.fromJson(Map<String, dynamic> json) {
    return UserModel(
      id: json['_id']?.toString() ?? '',
      nombre: json['nombre']?.toString() ?? '',
      email: json['email']?.toString() ?? '',
      telefono: json['telefono']?.toString(),
      rol: json['rol']?.toString() ?? 'cliente',
      estadoCuenta: json['estadoCuenta']?.toString() ?? 'activo',
      entrenadorAsignado: json['entrenadorAsignado']?.toString(),
      planActual: json['planActual']?.toString(),
    );
  }
}