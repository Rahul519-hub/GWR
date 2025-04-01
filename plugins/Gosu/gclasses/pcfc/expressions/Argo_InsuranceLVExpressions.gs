package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_InsuranceLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Argo_InsuranceLVExpressions {
  @javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_InsuranceLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Argo_InsuranceLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'editable' attribute on RowIterator at Argo_InsuranceLV.pcf: line 19, column 47
    function editable_3 () : java.lang.Boolean {
      return true 
    }
    
    // 'value' attribute on TextCell (id=Basic_Cell) at Argo_InsuranceLV.pcf: line 27, column 35
    function sortValue_0 (ArgoInsu :  entity.ArgoInsurancePlans) : java.lang.Object {
      return ArgoInsu.Basic
    }
    
    // 'value' attribute on TextCell (id=Standard_Cell) at Argo_InsuranceLV.pcf: line 35, column 38
    function sortValue_1 (ArgoInsu :  entity.ArgoInsurancePlans) : java.lang.Object {
      return ArgoInsu.Standard
    }
    
    // 'value' attribute on TextCell (id=Advance_Cell) at Argo_InsuranceLV.pcf: line 41, column 37
    function sortValue_2 (ArgoInsu :  entity.ArgoInsurancePlans) : java.lang.Object {
      return ArgoInsu.Advance
    }
    
    // 'toAdd' attribute on RowIterator at Argo_InsuranceLV.pcf: line 19, column 47
    function toAdd_22 (ArgoInsu :  entity.ArgoInsurancePlans) : void {
      PolicyPeriod.Argo_Insurance.addToArgoInsurancePlans(ArgoInsu)
    }
    
    // 'toRemove' attribute on RowIterator at Argo_InsuranceLV.pcf: line 19, column 47
    function toRemove_23 (ArgoInsu :  entity.ArgoInsurancePlans) : void {
      PolicyPeriod.Argo_Insurance.removeFromArgoInsurancePlans(ArgoInsu)
    }
    
    // 'value' attribute on RowIterator at Argo_InsuranceLV.pcf: line 19, column 47
    function value_24 () : entity.ArgoInsurancePlans[] {
      return PolicyPeriod.Argo_Insurance.ArgoInsurancePlans
    }
    
    property get PolicyPeriod () : PolicyPeriod {
      return getRequireValue("PolicyPeriod", 0) as PolicyPeriod
    }
    
    property set PolicyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("PolicyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/Argo_Insurance/Argo_InsuranceLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends Argo_InsuranceLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Standard_Cell) at Argo_InsuranceLV.pcf: line 35, column 38
    function action_11 () : void {
      Argo_PPupPopup.push(PolicyPeriod)
    }
    
    // 'action' attribute on TextCell (id=Standard_Cell) at Argo_InsuranceLV.pcf: line 35, column 38
    function action_dest_12 () : pcf.api.Destination {
      return pcf.Argo_PPupPopup.createDestination(PolicyPeriod)
    }
    
    // 'value' attribute on TextCell (id=Standard_Cell) at Argo_InsuranceLV.pcf: line 35, column 38
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      ArgoInsu.Standard = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Advance_Cell) at Argo_InsuranceLV.pcf: line 41, column 37
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      ArgoInsu.Advance = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Basic_Cell) at Argo_InsuranceLV.pcf: line 27, column 35
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      ArgoInsu.Basic = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=Basic_Cell) at Argo_InsuranceLV.pcf: line 27, column 35
    function editable_4 () : java.lang.Boolean {
      return true 
    }
    
    // 'value' attribute on TextCell (id=Basic_Cell) at Argo_InsuranceLV.pcf: line 27, column 35
    function valueRoot_7 () : java.lang.Object {
      return ArgoInsu
    }
    
    // 'value' attribute on TextCell (id=Standard_Cell) at Argo_InsuranceLV.pcf: line 35, column 38
    function value_13 () : java.lang.String {
      return ArgoInsu.Standard
    }
    
    // 'value' attribute on TextCell (id=Advance_Cell) at Argo_InsuranceLV.pcf: line 41, column 37
    function value_18 () : java.lang.String {
      return ArgoInsu.Advance
    }
    
    // 'value' attribute on TextCell (id=Basic_Cell) at Argo_InsuranceLV.pcf: line 27, column 35
    function value_5 () : java.lang.String {
      return ArgoInsu.Basic
    }
    
    property get ArgoInsu () : entity.ArgoInsurancePlans {
      return getIteratedValue(1) as entity.ArgoInsurancePlans
    }
    
    
  }
  
  
}