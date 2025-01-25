import { type ComAtprotoLabelDefs } from '@atcute/client/lexicons';

export interface Label {
  rkey: string;
  identifier: string;
  locales: ComAtprotoLabelDefs.LabelValueDefinitionStrings[];
}
