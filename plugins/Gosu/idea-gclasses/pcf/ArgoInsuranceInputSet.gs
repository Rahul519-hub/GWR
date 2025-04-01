package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/Argo_Insurance/ArgoInsuranceInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ArgoInsuranceInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($PolicyPeriod :  PolicyPeriod) : void {
    __widgetOf(this, pcf.ArgoInsuranceInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$PolicyPeriod})
  }
  
  function refreshVariables ($PolicyPeriod :  PolicyPeriod) : void {
    __widgetOf(this, pcf.ArgoInsuranceInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$PolicyPeriod})
  }
  
  
}