# Especificación de Requisitos de Software (SRS) Ligera - Estándar IEEE 830

**Proyecto:** Plataforma de Gestión de Tutorías Académicas  
**Curso:** Desarrollo de Software - Instituto Nacional de Apopa (INA)  
**Autor:** Miguel Alejandro Alas Díaz  
**Estado:** Base Aprobada (Sprint 1)  

---

## 1. Alcance del Sistema (Scope)

La **Plataforma de Gestión de Tutorías Académicas** es una solución web diseñada para optimizar, coordinar y dar seguimiento a las sesiones de refuerzo académico entre estudiantes y tutores dentro del Instituto Nacional de Apopa.

### En el Alcance (Lo que SÍ hace el sistema):
* **Gestión de Usuarios y Roles:** Registro, inicio de sesión y perfiles diferenciados para Estudiantes, Tutores y Administradores.
* **Programación de Citas:** Permite a los estudiantes visualizar los horarios disponibles de los tutores y agendar tutorías.
* **Buscador Especializado:** Filtro de tutores por materia, especialidad y horarios disponibles en tiempo real.
* **Historial Académico:** Registro y almacenamiento de las tutorías recibidas e impartidas para el control del rendimiento.

### Fuera del Alcance (Lo que NO hace el sistema):
* **Videollamada Integrada:** El sistema no tiene sala de conferencias propia; se provee un enlace externo (Google Meet / Teams).
* **Pasarela de Cobros:** Al ser una herramienta institucional pública, no procesa transacciones financieras.

---

## 2. Restricciones Técnicas

Las restricciones definen las limitaciones de infraestructura bajo las cuales el sistema debe construirse obligatoriamente:

1.  **Tecnologías Frontend:** La interfaz debe construirse usando HTML5, CSS3 y JavaScript moderno para garantizar ligereza.
2.  **Base de Datos Relacional:** El motor obligatorio para el manejo seguro de datos es Microsoft SQL Server.
3.  **Diseño Responsivo:** Compatibilidad garantizada en navegadores móviles y de PC mediante CSS adaptable.
4.  **Hospedaje y Código:** Todo el código fuente debe gestionarse en un repositorio de GitHub bajo control de versiones.

---

## 3. Historias de Usuario Integradas

### Historia de Usuario 1: Reserva de Tutoría (HU-01)
* **Como** Estudiante del instituto,
* **Quiero** agendar una sesión de tutoría seleccionando una materia y un horario disponible,
* **Para** recibir apoyo académico oportuno en los temas que se me dificultan.
* **Criterios de Aceptación:**
    * **Dado que** el estudiante ha iniciado sesión y entra al módulo de reservas,
    * **Cuando** selecciona un tutor, una hora libre y presiona "Confirmar Cita",
    * **Entonces** el sistema debe registrar la tutoría, enviarle una confirmación y bloquear ese horario para otros alumnos.

---

## 4. Matriz de Trazabilidad

Esta matriz asegura que cada necesidad del cliente tenga un reflejo directo en el código técnico desarrollado.

| ID Requisito | Nombre del Requisito | Tipo de Requisito | Historia de Usuario Relacionada | Módulo de Software / Código Técnico | Estado |
| :---: | :--- | :---: | :---: | :--- | :---: |
| **REQ-001** | Búsqueda y Filtro de Tutores por Materia | Funcional | HU-01 (Reserva de Tutoría) | Módulo de Búsqueda Académica (`busqueda.js`) | Completo |
