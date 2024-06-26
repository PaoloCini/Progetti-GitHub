function update_alarm_banner(me, eventInfo)
{
    var descriptions = "";
    for (var i=0; i < project.getWidget("_AlarmsMgr").getProperty("alarmCount"); i++) {
        if (project.getWidget("_AlarmsMgr").getProperty("alState",i) == "Triggered"){
            descriptions += " [" + project.getWidget("_AlarmsMgr").getProperty("alDescription",i) + "] ";            
        }
    }
    page.getWidget("alarm_banner").setProperty("text", descriptions);   
    if (descriptions == ""){
       page.getWidget("alarm_banner").setProperty("visibility", false);
    }
    else{
       page.getWidget("alarm_banner").setProperty("visibility", true);
    }
        
}

function BtnRect6_btn_onMouseUp(me, eventInfo)
{
    var sysVar = project.getWidget( "_SysPropMgr" );
    var UserName = sysVar.getProperty("This Client User-Name");    
    if (UserName === "admin")
{    
        project.loadPage("Configurazione.jmx"); 
}        
    else 
{
        alert("NOT ADMIN - Log as Administrator");
//        project.logout(false);
}         
}

//function BtnRect3_btn_onMouseUp(me, eventInfo)
//{
//        var sysVar = project.getWidget( "_SysPropMgr" );
//        var UserName = sysVar.getProperty("This Client User-Name");    
//        if (UserName === "admin" || UserName === "usr")
////        if (UserName === "usr")
//{    
//            project.loadPage("Parametri - Ciclo.jmx"); 
//}        
//        else
//{
//            alert("NOT ENABLED - Log as Administrator or User");
////            project.logout(false);
//}    
//}