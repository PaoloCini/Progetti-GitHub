//alert ("intern");
//Cambio unità misura
function _JSFunctBlock_onDataUpdate(me, eventInfo)
{
    var x1 = project.getTag("U_misura_lin");
    var x2 = project.getTag("U_misura_term");
    if (x1 === 1 || x1 === 0)  //lineare internazionale
    {
        //alert ("intern");
        project.setTag("Klin", 1);  
        project.setTag("UnitLin","mm"); //Unità di misura è mm
    }
    if (x1 === 2)  //lineare anglosassone
    {
        project.setTag("Klin", 0.03937);
        project.setTag("UnitLin","in"); ////Unità di misura è In
    }        
    if (x2 === 1 || x2 === 0)  //temperatura gardi Celsius
    {
        project.setTag("Ktmp", 1);
        project.setTag("Ktmp_offset", 0);
        project.setTag("UnitTemp","°C"); //Unità di misura è mm  
    }
    if (x2 === 2)  //temperatura gradi Farhenheit
    {
        project.setTag("Ktmp", 1.8);
        project.setTag("Ktmp_offset", 32);
        project.setTag("UnitTemp","°F"); //Unità di misura è mm
    }
    return false;       
}

function Alarms_General(me, eventInfo)
{
    var A1 = project.getTag("Emergenza"); 
    var A2 = project.getTag("All_Magn_termico_rulli_colla"); 
    var A3 = project.getTag("All_Magn_termico_tappeto"); 
    var A4 = project.getTag("All_Magn_termico_mettifoglio"); 
    var A5 = project.getTag("All_Magn_termico_Aspirazione"); 
    var A6 = project.getTag("All_Magn_termico_Pila"); 
    var A7 = project.getTag("All_Magn_termico_Antibolle");
    var A8 = project.getTag("All_Driver_Tappeto");
    var A9 = project.getTag("All_Driver_Mettifoglio"); 
    var A10 = project.getTag("All_Driver_Rulli_incollatori"); 
    var A11 = project.getTag("All_Driver_Antibolle"); 
    var A12 = project.getTag("All_Differenz_Vasca_colla"); 
    var A13 = project.getTag("All_Magn_Termico_Agitatore"); 
    var A14 = project.getTag("All_Magn_Termico_Pompa_colla"); 
    var A15 = project.getTag("All_Protezioni_Sicurezza"); 
    var A16 = project.getTag("All_Puntine_Non_Basse"); 
    var A17 = project.getTag("All_time_out_Antibolle"); 
    var A18 = project.getTag("Avviso_incompatibilita_passo_eps"); 
    var A19 = project.getTag("Avviso_incompatibilita_passo_premiscatola"); 
    var A20 = project.getTag("All_time_out_Antibolle"); 
    var A21 = project.getTag("Avviso_viscosimetro");
    if (A1 || A2 || A3 || A4 || A5 || A6 || A7 || A8 || A9 || A10 || A11 || A12 || A13 || A14 || A15 || A16 || A17 || A18 || A19 || A20 || A21)
    {
       project.showDialog("Emergenze.jmx");  
    }
    else if (!A1 && !A2 && !A3 && !A4 && !A5 && !A6 && !A7 && !A8 && !A9 && !A10 && !A11 && !A12 && !A13 && !A14 && !A15 && !A16 && !A17 && !A18 && !A19 && !A20 && !A21)
    {
       project.closeDialog("Emergenze.jmx");  
    }  
}

function Alarm_TC_Inc(me, eventInfo)
{
    var A1 = project.getTag("Allarme_Termocontrollo");
    if (A1)
    {
       project.showDialog("Allarme Termocontrolli incollatrice.jmx");  
    }
    else if (!A1)
    {
       project.closeDialog("Allarme Termocontrolli incollatrice.jmx");  
    }    
}

function Avv_ExtrPila(me, eventInfo)
{
    var A1 = project.getTag("Avv_extracorsa_pila_fogli");
    var A2 = project.getTag("Avviso_tasteggio_fogli");
    if (A1 || A2)
    {
       project.showDialog("Avviso Extracorsa Pila.jmx");  
    }
    else if (!A1 && !A2)
    {
       project.closeDialog("Avviso Extracorsa Pila.jmx");  
    }    
}

function Avv_Lubrificazione(me, eventInfo)
{
    var A1 = project.getTag("Avviso_lubrificazione");
    if (A1)
    {
       project.showDialog("Avviso Lubrificazione.jmx");  
    }
    else if (!A1)
    {
       project.closeDialog("Avviso Lubrificazione.jmx");  
    }    
}

