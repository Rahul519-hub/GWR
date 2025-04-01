package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_InsuranceDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class Argo_InsuranceDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($PolicyPeriod :  PolicyPeriod) : void {
    __widgetOf(this, pcf.Argo_InsuranceDV, SECTION_WIDGET_CLASS).setVariables(false, {$PolicyPeriod})
  }
  
  function refreshVariables ($PolicyPeriod :  PolicyPeriod) : void {
    __widgetOf(this, pcf.Argo_InsuranceDV, SECTION_WIDGET_CLASS).setVariables(true, {$PolicyPeriod})
  }
  
  
}