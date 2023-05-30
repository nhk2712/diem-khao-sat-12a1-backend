const Client = require("./mongodb")

async function StudentModel(studentId,dob){
    try{
        await Client.connect();

        const StudentCollection = await Client.db("diem_khao_sat").collection("lan_3");

        var dobWithSlashes = dob.charAt(0)+dob.charAt(1)+"/"+dob.charAt(2)+dob.charAt(3)+"/";
        for (var i=4;i<8;i++) dobWithSlashes+=dob.charAt(i);

        const student = await StudentCollection.findOne({_id:studentId,dob:dobWithSlashes});

        await Client.close();

        if (student) return student;
        else return {msg:"No student"}
    }
    catch(err){
        console.error(err)
        return {msg:err}
    }
}

module.exports = StudentModel;
