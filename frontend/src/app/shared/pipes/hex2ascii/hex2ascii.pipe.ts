import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'hex2ascii'
})
export class Hex2asciiPipe implements PipeTransform {

  transform(hex: string): string {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    const opPush = hex.split(' ').filter((_, i, a) => i > 0 && /^OP_PUSH/.test(a[i - 1]));
    if (opPush[0]) {
      hex = opPush[0];
    }
    if (!hex) {
      return '';
    }

    const bytes: number[] = [];
    for (let i = 0; i < hex.length; i += 2) {
      bytes.push(parseInt(hex.substr(i, 2), 16));
    }

    let decoded = new TextDecoder('utf-8').decode(Uint8Array.from(bytes));

    if (isSafari) {
      decoded = decoded.replace(/[^\x20-\x7E]/g, ' ');
    } else {
      decoded = decoded.replace(/\uFFFD/g, '').replace(/\\0/g, '');
    }

    return decoded;
  }


}
