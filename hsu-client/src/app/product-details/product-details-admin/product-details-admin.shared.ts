import {
  IProducerTableLocalisation,
  ProducerTableLocalisation,
  IProductDetailsInProgressLocalisations,
  productDetailsInProgressLocalisations,
  IWorkstepTableLocalisations,
  WorkstepTableLocalisations,
  IValueChainTableLocalisation,
  ValueChainTableLocalisation,
  IPmConfirmPopupLocalisations,
  pmConfirmPopupLocalisations,
  IPmMaxCostPopupLocalisations,
  pmMaxCostPopupLocalisations,
  ButtonType
} from 'hsu-library';
import {
  IProductDetailsSharedLocalisations,
  productDetailsSharedLocalisations
} from '../product-details.shared';



export interface IProductDetailsAdminLocalisations extends IProductDetailsSharedLocalisations{
  producerTable: IProducerTableLocalisation;
  productDetailsInProgress: IProductDetailsInProgressLocalisations;
  workstepTable: IWorkstepTableLocalisations;
  valueChainsTabe:IValueChainTableLocalisation;
  confirmExportPopup: IPmConfirmPopupLocalisations;
  confirmEditModePopup: IPmConfirmPopupLocalisations;
  cancelEditModePopup: IPmConfirmPopupLocalisations;
  publishEditModePopup: IPmConfirmPopupLocalisations;
  maxCostPopup: IPmMaxCostPopupLocalisations;
  publishProduct: string,
  makeChanges: string,

}

export interface IActionButton {
  buttonIsDisabled: boolean,
  buttonLabel: string,
  buttonType: ButtonType
}

export const ProductDetailsAdminLocalisations: IProductDetailsAdminLocalisations = {
  ...productDetailsSharedLocalisations,
  producerTable: ProducerTableLocalisation,
  productDetailsInProgress: productDetailsInProgressLocalisations,
  workstepTable: WorkstepTableLocalisations,
  valueChainsTabe: ValueChainTableLocalisation,
  confirmExportPopup: pmConfirmPopupLocalisations,
  confirmEditModePopup: pmConfirmPopupLocalisations,
  cancelEditModePopup: pmConfirmPopupLocalisations,
  publishEditModePopup: pmConfirmPopupLocalisations,
  maxCostPopup: pmMaxCostPopupLocalisations,
  publishProduct: '',
  makeChanges:'',
}
