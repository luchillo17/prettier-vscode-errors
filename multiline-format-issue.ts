import { take, retry, delay } from "rxjs/operators";

this.api.fetchAll('').pipe(take(1), retry(3), delay(100)).subscribe((data: any) => { });
