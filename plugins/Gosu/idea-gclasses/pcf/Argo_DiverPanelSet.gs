package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_DiverPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class Argo_DiverPanelSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Policydriver :  PolicyDriver, $Paline :  entity.PersonalAutoLine, $OpenEdit :  Boolean) : void {
    __widgetOf(this, pcf.Argo_DiverPanelSet, SECTION_WIDGET_CLASS).setVariables(false, {$Policydriver, $Paline, $OpenEdit})
  }
  
  function refreshVariables ($Policydriver :  PolicyDriver, $Paline :  entity.PersonalAutoLine, $OpenEdit :  Boolean) : void {
    __widgetOf(this, pcf.Argo_DiverPanelSet, SECTION_WIDGET_CLASS).setVariables(true, {$Policydriver, $Paline, $OpenEdit})
  }
  
  
}