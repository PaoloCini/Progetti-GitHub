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

//function Cadenza_onActivate(me, eventInfo)
//{
//    project.popupNum(71)
//}
