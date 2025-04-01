package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/MedicalCoverages_EXT.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionMedicalCoverageTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionMedicalCoverageType> implements productmodel.OptionMedicalCoverageType {
  public OptionMedicalCoverageTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.MedicalCoverages_EXT getCoverage() {
    return (productmodel.MedicalCoverages_EXT)getClause();
  }
  
  @java.lang.Override
  public productmodel.MedicalCoverages_EXT getMedicalCoverages_EXT() {
    return (productmodel.MedicalCoverages_EXT)getClause();
  }
  
  
}