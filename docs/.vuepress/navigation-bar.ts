import { NavbarConfig, NavbarGroup } from '@vuepress/theme-default'

const DMSI = '2223090033'

export const navigationBar = ([
  {
    text: 'Clases',
    link: '/clases/index.html',
  },
  {
    text: 'Labs',
    link: '/practicas/index.html'
  },
  {
    text: 'Temas',
    children: [
      {text: 'Introduction to PL', link:'/temas/introduccion-a-pl/guia-docente.html'},
      {text: 'Introduction to Compilers', link: 'https://docs.google.com/presentation/d/1N8h99dXzud9HzH8XY6QCZSmATCAWXtZebuqRTiy8qMU/edit#slide=id.gb7d71a5159_0_1024'},
      {text: "putout", link: "/temas/tree-transformations/putout"},
  /*
  This has to be the last or the first
  */
      {text: 'All themes', link: '/temas/'} 
  
  ],
  },
  {
    text: 'Context',
    children: [
      {
        text: '\u2442 ASTexplorer',
        link: 'https://astexplorer.net/'
      },      
      {
        text: 'Recursos',
        children: [
            { text: "ULL", link: '/recursos/index.html/#recursos-ull'},
            { text: "GitHub", link: '/recursos/index.html/#recursos-github'},
          ]
      },      
      {
        text: 'Horarios',
        children: [  
          { text: 'Google Cal, Cal Acad y Exámenes', link: '/horarios/index.html'},
          { text: 'Horarios de Tercero', link: 'https://www.ull.es/grados/ingenieria-informatica/informacion-academica/horarios-y-calendario-examenes/#tercero'},
        ],
      },
      {
        text: 'Referencias',
        link: '/referencias/index.html'
      },
    ]
  },
  {
    text: 'GitHub',
    children: [
      {
        text: "ULL-ESIT-DMSI-2223",
        children: [
          {text: 'Organization', link: 'https://github.com/ULL-ESIT-DMSI-2223'},
          {text: 'Teams', link: 'https://github.com/orgs/ULL-ESIT-DMSI-2223/teams'},
          {text: 'Projects', link: 'https://github.com/orgs/ULL-ESIT-DMSI-2223/projects'},
          {text: 'Classroom', link: 'https://classroom.github.com/classrooms/108465062-ull-esit-dmsi-2223'},
        ]    
      },
      {text: 'Apuntes Repo', 
        children: [
        { text: 'Deploy at GH', link: 'https://ull-esit-dmsi.github.io/vuepress-next-learning/'},
        { text: 'Source', link: 'https://github.com/ULL-ESIT-DMSI/vuepress-next-learning'}
        ]
      },
      {text: 'Teacher',
        children: [
          {text: 'ULL-MFP-TFM-Y-PCE-2122', link: 'https://github.com/ULL-MFP-TFM-Y-PCE-2122/private'},
          //{text: 'PL Discussions', link: 'https://github.com/ULL-ESIT-DMSI-2223/PL-2122-discussions/discussions'},
          {text: 'Global Campus Teachers', link: 'https://github.com/GitHub-Global-Campus/Global-Campus-Teachers/discussions'},
        ]
      }
    ]
  },
  {
    text: 'Campus Virtual',
    children: [
      { text:'Campus Virtual', link: 'https://campusingenieriaytecnologia2223.ull.es/course/view.php?id=2223090033' },
      {text: 'Guía Docente',
       children: [
         { text: "Guía", link: 'https://www.ull.es/apps/guias/guias/view_guide_course/2223/139264413/'},
         { text: "Casiano", link: 'https://www.ull.es/apps/guias/guias/view_teacher_niu/798/crguezl/'},
         {text: 'Horario de Tutorías', link: 'https://www.ull.es/apps/guias/guias/view_guide_course/2223/139264413/3/'},
       ]
      },
      { text: 'Campus',
        children: [
          { text: 'Participantes', link: "https://campusingenieriaytecnologia2223.ull.es/user/index.php?id=2223090033" },
          { text: 'Calificador', link: "https://campusingenieriaytecnologia2223.ull.es/grade/report/user/index.php?id=2223090033" },
          { text: 'Tareas', link: "https://campusingenieriaytecnologia2223.ull.es/mod/assign/index.php?id=2223090033"},
          { text: 'Foros', link: "https://campusingenieriaytecnologia2223.ull.es/mod/forum/index.php?id=2223090033"},
          { text: 'Banco de Preguntas', link: "https://campusingenieriaytecnologia2223.ull.es/question/edit.php?courseid=2223090033" },
        ]
      },
      { 
        text: 'ULL',
        children: [
          {text: 'Calendario Académico', link: 'https://www.ull.es/estudios-docencia/calendario-academico/'},
          {text: 'Portafirmas', link: 'https://sede.ull.es/ecivilis-signature-inbox-application/inbox.html'},
        ]
      },
      { text: 'TFG', link: "https://campusingenieriaytecnologia2122.ull.es/grade/report/user/index.php?id=2122090070&userid=254"},
      { text: 'Campus de Masters', link: "https://campusdoctoradoyposgrado2122.ull.es/my/"},
 
/*
      <li><a :href="$var.foros" target="_blank">Foros</a></li>
*/
    ]
  },
  {
    text: 'Google',
    children: [
      {text: 'Meet', link: 'https://meet.google.com/eha-yfij-zmo'},
      {text: 'Chat', link: 'https://mail.google.com/chat/u/1/#chat/welcome'},
      {text: 'Spreadsheets', link: 'https://docs.google.com/spreadsheets/u/1/?tgif=d'},
      {text: 'Community', link: 'https://currents.google.com/u/0/communities/101901734024125937720'},
      {
        text: 'Vídeos', 
        children: [
          { text: 'PL 21/22', link: 'https://youtube.com/playlist?list=PLuPGCp-dfrUQbbnbT_8qHK1WQYurYwBEY' },
          { text: 'PL 20/21', link: 'https://www.youtube.com/playlist?list=PLuPGCp-dfrUTzN_o2beArY1QoFUTGH-yd'},
          { text: 'PL 19/20', link: 'https://youtube.com/playlist?list=PLuPGCp-dfrUTByhC5b9vInei9OzdYSBs7' }
        ]
      }
    ]
  }
]) as NavbarConfig;

