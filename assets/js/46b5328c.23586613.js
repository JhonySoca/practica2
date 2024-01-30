"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[33],{3965:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>c});var r=n(5893),s=n(1151);const i={sidebar_position:3},l="Linux | Valet",t={id:"tutorial-basics/tuto3",title:"Linux | Valet",description:"Si desea implementar sobre un servidor local Linux \u201cdesde cero\u201d debe:",source:"@site/docs/tutorial-basics/tuto3.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/tuto3",permalink:"/practica2/docs/tutorial-basics/tuto3",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/tuto3.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"MDocker + GitLab + SSL",permalink:"/practica2/docs/tutorial-basics/tuto2"},next:{title:"Docker | Linux | SSL externo",permalink:"/practica2/docs/tutorial-basics/tuto4"}},o={},c=[];function d(e){const a={a:"a",h1:"h1",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"linux--valet",children:"Linux | Valet"}),"\n",(0,r.jsx)(a.p,{children:"Si desea implementar sobre un servidor local Linux \u201cdesde cero\u201d debe:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Contar con acceso root"}),"\n",(0,r.jsx)(a.li,{children:"Instalar php 7.2 y todas las librer\xedas requeridas por el aplicativo y Laravel"}),"\n",(0,r.jsx)(a.li,{children:"Instalar Mysql, si lo desea PhpMyAdmin para hacer las primeras pruebas de base de datos"}),"\n",(0,r.jsx)(a.li,{children:"Instalar Git, Curl, Composer"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Ubuntu no cuenta con la versi\xf3n 7.2 de php de manera nativa por lo que se debe seguir un par de pasos para agregar un repositorio y luego proceder con la instalaci\xf3n, ellos son"}),"\n",(0,r.jsx)(a.p,{children:"Para poder ejecutar los siguientes comandos debe acceder a la terminal como usuario root."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"apt-get update"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Para poder agregar un PPA, ejecute los siguientes:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"apt-get install software-properties-common"}),"\n",(0,r.jsx)(a.li,{children:"apt-get install python-software-properties"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Para agregar el PPA, en algunos casos solicitar\xe1 confirmar con enter"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["add-apt-repository ppa",":ondrej","/php"]}),"\n",(0,r.jsx)(a.li,{children:"apt-get update"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Procedemos a Instalar PHP, aunque se instalar algunas librer\xedas junto con PHP, se agregan para asegurar la instalaci\xf3n"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"apt-get install php7.2 php7.2-mbstring php7.2-soap php7.2-zip php7.2-mysql php7.2-curl php7.2-gd php7.2-xml php7.2-mcrypt"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Instalamos Mysql, phpmyadmin opcional"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"apt-get install mysql-server-5.7 mysql-client-5.7 phpmyadmin"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Se le solicitara contrase\xf1a dos veces, con su confirmaci\xf3n, tanto para mysql como para phpmyadmin"}),"\n",(0,r.jsx)(a.p,{children:"Instalamos Curl y Git"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"apt-get install git"}),"\n",(0,r.jsx)(a.li,{children:"apt-get install curl"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Luego se procede a instalar Composer"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"apt-get install composer"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Dar permisos de lectura y escritura a la carpeta composer"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Chmod \u2013R 777 ~/.composer"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Instalar librerias cpriego de Valet"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"composer global require cpriego/valet-linux"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Ir a carpeta home /.profile y a\xf1adir la siguiente linea al final del documento y guardar"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Nano ~/.profile"}),"\n",(0,r.jsx)(a.li,{children:"PATH= \u201cHOME/.composer/vendor/bin:$PATH\u201d"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Luego ejecutar en terminal: source ~/.profile"}),"\n",(0,r.jsx)(a.p,{children:"Instalar las siguientes librer\xedas"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"apt install network-maneger libnss3-tools jq xsel"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Ya en este punto el sistema se encuentra listo para instalar Valet pero antes debe asegurarse de tener libre el puerto :80 . Si tienes instalado apache en tu sistema debes detenerlo para liberar el puerto."}),"\n",(0,r.jsx)(a.p,{children:"Detener servicios de apache2 si lo tienes instalado."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"services apache2 stop"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Valet trabaja con el servidor de nginx por lo cual debe instalarse previamente antes de instalar Valet."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Apt install nginx"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Verificar que el servidor de nginx se est\xe1 ejecutando correctamente"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Systemctl status nginx"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Si todo est\xe1 ok instalar valet"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Valet install"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Con valet podemos tener nuestro c\xf3digo en cualquier parte del sistema en este caso usaremos la carpeta home para instalarlo."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Mkdir ~/code"}),"\n",(0,r.jsx)(a.li,{children:"cd code"}),"\n",(0,r.jsx)(a.li,{children:"valet park"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Ya en este punto tenemos todo listo para clonar el repositorio y ejecutarlo. Una vez ubicado en /code con la herramienta git, si ya se le ha compartido acceso a repositorio ejecute lo siguiente:"}),"\n",(0,r.jsxs)(a.p,{children:["git clone ",(0,r.jsx)(a.a,{href:"https://gitlab.com/b.mendoza/facturadorpro3.git",children:"https://gitlab.com/b.mendoza/facturadorpro3.git"})]}),"\n",(0,r.jsx)(a.p,{children:"Esto crear\xe1 una carpeta llamada facturadorpro3, luego de la descarga puede entrar en la carpeta con cd facturadorpro3, dentro de ella puede ejecutar lo siguiente para configurar el archivo .env"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"cp .env.example .env"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Donde APP_URL_BASE corresponde a su dominio, DB_DATABASE ser\xe1 el nombre que le de a la base de datos principal, DB_USERNAME y DB_PASSWORD equivalen al usuario creado anteriormente en la instalaci\xf3n de mysql."}),"\n",(0,r.jsx)(a.p,{children:"Seguidamente:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["php artisan key",":generate"]}),"\n",(0,r.jsx)(a.li,{children:"composer dump-autoload"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Luego deber\xe1 registrar la base de datos mediante phpmyadmin, accediendo a la ruta sudominio.com/phpmyadmin con el usuario root y contrase\xf1a agregada en la instalaci\xf3n."}),"\n",(0,r.jsx)(a.p,{children:"Si todo marcha bien es hora de agregar los paquetes faltantes en el proyecto y ejecutar las migraciones."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"composer install"}),"\n",(0,r.jsx)(a.li,{children:"php artisan migrate --seed"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Puede verificar actualizando phpmyadmin, en la lista de la izquierda se mostrar\xe1 la base de datos creada y la derecha las tablas generadas."}),"\n",(0,r.jsx)(a.p,{children:"Con estos pasos podr\xe1 observar el aplicativo en su dominio, en algunos casos si tiene problemas para observar el aplicativo puede deberse a los permisos en las carpetas del proyecto, principalmente storage y cache requieren el siguiente comando"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"chmod -R 755 storage"}),"\n",(0,r.jsx)(a.li,{children:"chmod -R 755 bootstrap/cache"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Tambi\xe9n es necesario ejecutar el siguiente comando para establecer la ruta de los archivos cargados de la empresa"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["php artisan storage",":link"]}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Si todo se realiz\xf3 correctamente, ya tendr\xe1 las tablas del usuario principal creadas, y podr\xe1 acceder mediante la web, al proyecto.\nAccesos:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Facturadorpro3.test"}),"\n",(0,r.jsxs)(a.li,{children:["usuario: ",(0,r.jsx)(a.a,{href:"mailto:admin@gmail.com",children:"admin@gmail.com"}),"\ncontrase\xf1a: 123456"]}),"\n"]})]})}function p(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>t,a:()=>l});var r=n(7294);const s={},i=r.createContext(s);function l(e){const a=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);