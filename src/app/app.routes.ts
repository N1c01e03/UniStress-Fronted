import { Routes } from '@angular/router';
import {Sesiones} from './sesiones/sesiones';
import {Recomendaciones} from './recomendaciones/recomendaciones';
import {MiEvolucion} from './mi-evolucion/mi-evolucion';
import {Notificaciones} from './notificaciones/notificaciones';
import {Suscripcion} from './suscripcion/suscripcion';
import {Pagos} from './pagos/pagos';
import {BancoPreguntas} from './banco-preguntas/banco-preguntas';
import {Configuracion} from './configuracion/configuracion';
import {PerfilPsicologos} from './perfil-psicologos/perfil-psicologos';
import {EstadoEmocional} from './estado-emocional/estado-emocional';
import {TestEmocional} from './test-emocional/test-emocional';
import {Perfil} from './perfil/perfil';
import {VistaEmocionalPacientes} from './vista-emocional-pacientes/vista-emocional-pacientes';
import {RecomendacionesPsicologo} from './recomendaciones-psicologo/recomendaciones-psicologo';
import {Home} from './home/home';
import {HistorialSesionesPacientes} from './historial-sesiones-pacientes/historial-sesiones-pacientes';
import {TendenciasEmocionales} from './tendencias-emocionales/tendencias-emocionales';
import {IniciarSesion} from './iniciar-sesion/iniciar-sesion';
import {RegistoEstudiante} from './registo-estudiante/registo-estudiante';
import {ConfiguracionPsicologo} from './configuracion-psicologo/configuracion-psicologo';
import {NotificacionesPsicologo} from './notificaciones-psicologo/notificaciones-psicologo';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'iniciar-sesion', component: IniciarSesion },
  { path: 'registrar-estudiante/estudiante', component: RegistoEstudiante },
  { path: 'registrar-psicologo/psicologo', component: RegistoEstudiante },
  { path: 'perfil', component: Perfil },
  { path: 'test-emocional', component: TestEmocional },
  { path: 'estado-emocional', component: EstadoEmocional },
  { path: 'sesiones', component: Sesiones },
  { path: 'recomendaciones', component: Recomendaciones },
  { path: 'mi-evolucion', component: MiEvolucion },
  { path: 'notificaciones', component: Notificaciones },
  { path: 'suscripcion', component: Suscripcion },
  { path: 'pagos', component: Pagos },
  { path: 'configuracion', component: Configuracion },
  {path: 'perfil-psicologos', component: PerfilPsicologos },
  {path: 'vista-emocional-pacientes', component: VistaEmocionalPacientes },
  {path:'historial-sesiones-pacientes', component: HistorialSesionesPacientes },
  { path: 'recomendaciones-psicologo', component: RecomendacionesPsicologo },
  {path: 'banco-preguntas', component: BancoPreguntas},
  {path: 'tendencias-emocionales', component: TendenciasEmocionales },
  { path: 'configuracion-psicologo', component: ConfiguracionPsicologo},
  { path: 'notificaciones-psicologo', component: NotificacionesPsicologo},

  { path: '**', redirectTo: '' }
];
