import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
require('zone.js');
import { Version } from '@microsoft/sp-core-library';
import {
    BaseClientSideWebPart,
    IPropertyPaneConfiguration,
    PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './Angular2Prototype.module.scss';
import * as strings from 'angular2PrototypeStrings';
import { IAngular2PrototypeWebPartProps } from './IAngular2PrototypeWebPartProps';

export default class Angular2PrototypeWebPart extends BaseClientSideWebPart<IAngular2PrototypeWebPartProps> {

    public render(): void {
        this.domElement.innerHTML = '<app-form></app-form>';
        platformBrowserDynamic().bootstrapModule(AppModule);
    }

    protected get dataVersion(): Version {
        return Version.parse('1.0');
    }

    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    }
}
