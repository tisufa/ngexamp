import { ObjectHelper } from '../helpers/object.helper';

export class OptionsModel {
  public list: any[];
  private constructor(
    private options: any[],
    private optionViewField?: string
  ) {}

  public search(keyword: string): void {
    this.list = this.options.filter((option) => {
      const name: string = new ObjectHelper(option).resolveValue(
        this.optionViewField || 'name'
      );
      return name.toLowerCase().includes(keyword.toLowerCase());
    });
  }

  public static create(options: any[], optionViewField?: string): OptionsModel {
    const model = new OptionsModel(options, optionViewField);
    model.list = Array.from(options || []);
    return model;
  }
}
