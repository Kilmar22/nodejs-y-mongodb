const mongoose = require('mongoose')

//conexion con la base de datos CRUD
const url = 'mongodb://localhost/CRUD'
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then( ()=> console.log('Conectado a mongo'))
.catch( (e)=> console.log('El error de conexion es: '+ e ))

//Esquema de la coleccion registros
const registrosSchema = mongoose.Schema({
    nombre:String,
    edad:Number,
    codigoE:String
}, {versionKey: false})

//modelo registros
const RegistrosModel = mongoose.model('Registros', registrosSchema)

//mostrar
const mostrar = async ()=>{
    const registros = await RegistrosModel.find()
    console.log(registros)
}
mostrar()

//crear
const crear = async ()=>{
    const registro = new RegistrosModel({
        nombre: 'Eduardo Josue Velasquez Carrillo',
        edad: 23,
        codigoE: 'SMIS784319'
    })
    const resultado = await registro.save()
    console.log(resultado)
}
//crear()

//editar
const actualizar = async (id)=>{
    const registro = await RegistrosModel.updateOne({_id:id},
    {
        $set:{
            codigoE: 'SMIS562718'
        }
    })
}
//actualizar('60b314d67ff88810bcd6c8c3')

//eliminar
const eliminar = async (id)=>{
    const registro = await RegistrosModel.deleteOne({_id:id})
    console.log(registro)
}

//eliminar('60b316a223689a3b30e41bf4')