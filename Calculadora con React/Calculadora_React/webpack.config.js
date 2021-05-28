//Requerimos el modulo de path el HTML plugin que instalamos
const path = require ('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//Creamos un nuevo modulo que vamos a exportar con esa configuración
//Vamos a configurar cada uno de los elementos que necesitamos
module.exports={
    //Iniciando por la entrada del proyecto
    //Haciendo referencia al archivo principal
    entry:'./src/index.js',
    //En este output, es donde vamos a guardar los archivos resultantes cuando hagamos la configuración
    output:{
        //La instancia resolve nos ayuda a detectar el directorio donde nos encontramos y el directorio donde vamos a guardar los archivos compilados
        path:path.resolve(__dirname,'dist'),
        //Filename nos pone un nombre al archivo compilado
        filename:'bundle.js'
    }, 
    //En este elemento resuelve las extensiones que vamos a utilizar
    resolve:{
        extensions:['.js','.jsx']
    },

    //Modulo con las reglas necesarias
    module:{
        rules:[
            {
                //Regla principal
                //Indetificación de los archivos con una expresión regular
                test:/\.(js|jsx)$/,
                //Exclusion de carpetas
                exclude:/node_modules/,
                //Utilizamos el loader de babel instalado
                use:{
                    loader:"babel-loader"                  
                }
            },

            {
                //Regla para trabajar con los archivos HTML
                test:/\.html$/,
                //Utilizamos el loader de babel instalado
                use:[
                    {
                        loader:'html-loader'
                    }
                ]
            },

            {
                test:/\.(s*)css$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }

        ]
    },
    //Se añaden los plugins que necesitamos
    plugins:[
        //Pasamos un objeto con la configuracion que necesitamos
        new HtmlWebPackPlugin({
            //Donde esta ubicado el template que tenemos
            template:'./public/index.html',
            filename:'./index.html'
        }),

        new MiniCssExtractPlugin({
            filename:'assets/[name].css'
        }),
    ]
};