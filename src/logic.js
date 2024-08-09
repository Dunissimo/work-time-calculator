import {
  convertToFormat,
  formatMoney,
  parseTimeAndConvertToMinutes,
} from "./utils";

export const init = (data) => {
  const workBody = document.querySelector("#work-body");
  const workFooter = document.querySelector("#work-footer");

  let res = "";
  let resMoney = 0;
  let resTime = 0;
  let resQuota = 0;

  for (const date in data) {
    const dayTimes = data[date];
    let time = 0;
    let money = 0;

    for (let i = 0; i < dayTimes.length; i += 2) {
      const dayTime = parseTimeAndConvertToMinutes(dayTimes[i]);
      const price = dayTimes[i + 1];

      time += dayTime;
      resTime += dayTime;

      const sum = +(dayTime * (price / 60)).toFixed(0);

      money += sum;
      resMoney += sum;
    }

    const quota = time - 360;
    resQuota += quota;
    const quotaInFormat = convertToFormat(Math.abs(time - 360));

    res += `<tr>
            <td>${date}</td>
            <td>${convertToFormat(time)}</td>
            <td>${formatMoney(money)}</td>
            <td>${quota >= 0 ? quotaInFormat : `-${quotaInFormat}`}</td>
            <td></td>
        </tr>`;
  }

  workBody.innerHTML = res;

  const resQuotaInFormat = convertToFormat(Math.abs(resQuota));

  workFooter.innerHTML = `<tr>
        <th rowspan="2">Всего</th>
        <td rowspan="2">${convertToFormat(resTime)}</td>
        <td>${formatMoney(resMoney)}</td>
        <td rowspan="2">${
          resQuota >= 0 ? resQuotaInFormat : `-${resQuotaInFormat}`
        }</td>
		<td>${formatMoney(+resMoney / (resTime / 60).toFixed(2))}</td>

        <tr>
			<td>+ ставка = ${formatMoney(resMoney + 10000)}</td>
			<td>+ ставка = ${formatMoney(
        +((resMoney + 10000) / (resTime / 60)).toFixed(2)
      )}</td>
		</tr>
    </tr>`;
};
