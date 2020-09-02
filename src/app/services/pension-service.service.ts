import { Injectable } from '@angular/core';
import { Pension } from '../models/pension';
import { PensionRequest } from '../models/pension-request';

// Simple Service with input and output. This has to be stubbed data for now, no real services. Save some mocked data here and imitate behaviour.
@Injectable({
  providedIn: 'root'
})
export class PensionServiceService {

  constructor() { }

  public getPensionContract(input: PensionRequest): Pension {

    return new PensionRequest();
  }
}
