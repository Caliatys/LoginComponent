import { OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
export declare class MfaSetupFormComponent implements OnInit, OnDestroy {
    private builder;
    formGroup: FormGroup;
    labels: any;
    errors: any;
    inputs: any;
    qrCode: string;
    code: string;
    saveMfa: EventEmitter<any>;
    constructor(builder: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    send(): void;
    private initFormGroups();
}
