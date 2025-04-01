package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/ARM_Insurance/Arm_InsuranceLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Arm_InsuranceLVExpressions {
  @javax.annotation.Generated("config/web/pcf/ARM_Insurance/Arm_InsuranceLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Arm_InsuranceLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'editable' attribute on RowIterator at Arm_InsuranceLV.pcf: line 17, column 47
    function editable_6 () : java.lang.Boolean {
      return true 
    }
    
    // 'value' attribute on TextCell (id=RegularPlan_Cell) at Arm_InsuranceLV.pcf: line 23, column 46
    function sortValue_0 (Arm_Insurance :  entity.Arm_InsurancePlans) : java.lang.Object {
      return Arm_Insurance.RegularPlan
    }
    
    // 'value' attribute on TextCell (id=ExecutivePlan_Cell) at Arm_InsuranceLV.pcf: line 28, column 48
    function sortValue_1 (Arm_Insurance :  entity.Arm_InsurancePlans) : java.lang.Object {
      return Arm_Insurance.ExecutivePlan
    }
    
    // 'value' attribute on TextCell (id=SilverPlan_Cell) at Arm_InsuranceLV.pcf: line 33, column 45
    function sortValue_2 (Arm_Insurance :  entity.Arm_InsurancePlans) : java.lang.Object {
      return Arm_Insurance.SilverPlan
    }
    
    // 'value' attribute on TextCell (id=GoldPlan_Cell) at Arm_InsuranceLV.pcf: line 38, column 43
    function sortValue_3 (Arm_Insurance :  entity.Arm_InsurancePlans) : java.lang.Object {
      return Arm_Insurance.GoldPlan
    }
    
    // 'value' attribute on TextCell (id=DiamondPlan_Cell) at Arm_InsuranceLV.pcf: line 43, column 46
    function sortValue_4 (Arm_Insurance :  entity.Arm_InsurancePlans) : java.lang.Object {
      return Arm_Insurance.DiamondPlan
    }
    
    // 'value' attribute on TextCell (id=PlatinumPlan_Cell) at Arm_InsuranceLV.pcf: line 48, column 47
    function sortValue_5 (Arm_Insurance :  entity.Arm_InsurancePlans) : java.lang.Object {
      return Arm_Insurance.PlatinumPlan
    }
    
    // 'value' attribute on RowIterator at Arm_InsuranceLV.pcf: line 17, column 47
    function value_43 () : entity.Arm_InsurancePlans[] {
      return PolicyPeriod.Arm_Insurance.Arm_InsurancePlans
    }
    
    property get PolicyPeriod () : PolicyPeriod {
      return getRequireValue("PolicyPeriod", 0) as PolicyPeriod
    }
    
    property set PolicyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("PolicyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/ARM_Insurance/Arm_InsuranceLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends Arm_InsuranceLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ExecutivePlan_Cell) at Arm_InsuranceLV.pcf: line 28, column 48
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      Arm_Insurance.ExecutivePlan = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=SilverPlan_Cell) at Arm_InsuranceLV.pcf: line 33, column 45
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      Arm_Insurance.SilverPlan = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=GoldPlan_Cell) at Arm_InsuranceLV.pcf: line 38, column 43
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      Arm_Insurance.GoldPlan = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=DiamondPlan_Cell) at Arm_InsuranceLV.pcf: line 43, column 46
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      Arm_Insurance.DiamondPlan = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=PlatinumPlan_Cell) at Arm_InsuranceLV.pcf: line 48, column 47
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      Arm_Insurance.PlatinumPlan = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=RegularPlan_Cell) at Arm_InsuranceLV.pcf: line 23, column 46
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      Arm_Insurance.RegularPlan = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextCell (id=RegularPlan_Cell) at Arm_InsuranceLV.pcf: line 23, column 46
    function editable_7 () : java.lang.Boolean {
      return true 
    }
    
    // 'value' attribute on TextCell (id=RegularPlan_Cell) at Arm_InsuranceLV.pcf: line 23, column 46
    function valueRoot_10 () : java.lang.Object {
      return Arm_Insurance
    }
    
    // 'value' attribute on TextCell (id=ExecutivePlan_Cell) at Arm_InsuranceLV.pcf: line 28, column 48
    function value_14 () : java.lang.String {
      return Arm_Insurance.ExecutivePlan
    }
    
    // 'value' attribute on TextCell (id=SilverPlan_Cell) at Arm_InsuranceLV.pcf: line 33, column 45
    function value_20 () : java.lang.String {
      return Arm_Insurance.SilverPlan
    }
    
    // 'value' attribute on TextCell (id=GoldPlan_Cell) at Arm_InsuranceLV.pcf: line 38, column 43
    function value_26 () : java.lang.String {
      return Arm_Insurance.GoldPlan
    }
    
    // 'value' attribute on TextCell (id=DiamondPlan_Cell) at Arm_InsuranceLV.pcf: line 43, column 46
    function value_32 () : java.lang.String {
      return Arm_Insurance.DiamondPlan
    }
    
    // 'value' attribute on TextCell (id=PlatinumPlan_Cell) at Arm_InsuranceLV.pcf: line 48, column 47
    function value_38 () : java.lang.String {
      return Arm_Insurance.PlatinumPlan
    }
    
    // 'value' attribute on TextCell (id=RegularPlan_Cell) at Arm_InsuranceLV.pcf: line 23, column 46
    function value_8 () : java.lang.String {
      return Arm_Insurance.RegularPlan
    }
    
    property get Arm_Insurance () : entity.Arm_InsurancePlans {
      return getIteratedValue(1) as entity.Arm_InsurancePlans
    }
    
    
  }
  
  
}