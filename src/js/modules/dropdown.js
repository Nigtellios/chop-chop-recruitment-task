// Dropdown JS Code
export const dropdownTest = `Dropdown has been successfully loaded.`;

export function openDropdowns(dropdownTriggerName, dropdownName) {
  const dropdownTriggers = document.querySelectorAll(dropdownTriggerName);
  const dropdowns = document.querySelectorAll(dropdownName);

  dropdownTriggers.forEach((trigger) => {
    trigger.onmouseover = function () {

    }
  })

  dropdowns.forEach((dropdownItem) => {
    dropdowns.onmouseover = function () {
      this.dropdownItem
    };
  });

  console.log(dropdownTriggers)
  console.log(dropdowns)

  const closeDropdown = (dropdownName) => {

  }
}
