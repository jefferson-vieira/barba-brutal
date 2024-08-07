import { DateTimeUtils } from '@barba-brutal/core';

import filterNoWorkdays from './utils/filter-no-workdays';

const WEEK_DAYS_COUNT = 7;

const ONE_DAY_MILLISECONDS = 86_400_000;

export const CURRENT_WORKWEEK = Array.from({ length: WEEK_DAYS_COUNT })
  .map(
    (_, i) =>
      new Date(DateTimeUtils.today().getTime() + ONE_DAY_MILLISECONDS * i),
  )
  .filter(filterNoWorkdays);
