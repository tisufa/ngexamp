import { ComponentService } from 'src/app/shared/services/component.service';
import { Toast } from './toast';

export const toastFactory = (componentService: ComponentService) => {
  return new Toast(componentService);
};
