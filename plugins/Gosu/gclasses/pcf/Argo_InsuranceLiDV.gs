package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_InsuranceLiDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class Argo_InsuranceLiDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($ArgoInsu :  entity.ArgoInsurancePlans) : void {
    __widgetOf(this, pcf.Argo_InsuranceLiDV, SECTION_WIDGET_CLASS).setVariables(false, {$ArgoInsu})
  }
  
  function refreshVariables ($ArgoInsu :  entity.ArgoInsurancePlans) : void {
    __widgetOf(this, pcf.Argo_InsuranceLiDV, SECTION_WIDGET_CLASS).setVariables(true, {$ArgoInsu})
  }
  
  
}