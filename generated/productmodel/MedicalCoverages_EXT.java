package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/MedicalCoverages_EXT.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class MedicalCoverages_EXT extends entity.GeneralLiabilityCov {
  protected MedicalCoverages_EXT()  {
    super((java.lang.Void)null);
  }
  
  public MedicalCoverages_EXT(entity.PolicyPeriod branch)  {
    super(branch, "zh5h6g18f8srl14n0dpdjn32icb");
  }
  
  public MedicalCoverages_EXT(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zh5h6g18f8srl14n0dpdjn32icb");
  }
  
  public productmodel.DirectCoverageDeductionsType getCoverageDeductionsTerm() {
    return (productmodel.DirectCoverageDeductionsType)getCovTerm("z4jh8rd9kkn7l48hc46qfavc9nb");
  }
  
  public boolean getHasCoverageDeductionsTerm() {
    return hasCovTerm("z4jh8rd9kkn7l48hc46qfavc9nb");
  }
  
  public boolean getHasMedicalCoverageTerm() {
    return hasCovTerm("zi2iodp4ftr8q6i5mvmcm16b988");
  }
  
  public productmodel.OptionMedicalCoverageType getMedicalCoverageTerm() {
    return (productmodel.OptionMedicalCoverageType)getCovTerm("zi2iodp4ftr8q6i5mvmcm16b988");
  }
  
  static {
    com.guidewire._generated.productmodel.MedicalCoverages_EXTInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.MedicalCoverages_EXT>() {
      public productmodel.MedicalCoverages_EXT newEmptyInstance() {
        return new productmodel.MedicalCoverages_EXT();
      }
      
      
    });
  }
}