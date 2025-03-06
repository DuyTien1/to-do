let input = document.querySelector(".to-do__input");
let list = document.querySelector(".to-do__list");
let percent = document.querySelector(".percent");

input.addEventListener("keydown", (e) => {
	if (input.value === "") {
		return;
	}
	if (e.key === "Enter") {
		let item = document.createElement("li");
		item.addEventListener("click", () => {
			item.classList.toggle("done");
			let total_tasks = list.querySelectorAll("li").length;
			let completed_tasks = list.querySelectorAll("li.done").length;
			if (total_tasks == 0 && completed_tasks == total_tasks) {
				document.querySelector(".progress__bar").style.width = "0%";
				document.querySelector(".progress__bar").style.background = "rgb(255, 61, 61)";
				document.querySelector(".progress__bar").style.border = "1px solid rgb(255, 61, 61)";
				percent.innerHTML = "0%";
			} else {
				let progress = Math.floor((completed_tasks / total_tasks) * 100);
				if (progress < 35) {
					document.querySelector(".progress__bar").style.width = `${progress}%`;
					document.querySelector(".progress__bar").style.background = "rgb(255, 61, 61)";
					document.querySelector(".progress__bar span").style.border = "1px solid rgb(255, 61, 61)";
					percent.innerHTML = `${progress}%`;
				} else if (progress >= 35 && progress < 70) {
					document.querySelector(".progress__bar").style.width = `${progress}%`;
					document.querySelector(".progress__bar").style.background = "rgb(209, 214, 70)";
					document.querySelector(".progress__bar span").style.border =
						"1px solid rgb(209, 214, 70)";
					percent.innerHTML = `${progress}%`;
				} else {
					document.querySelector(".progress__bar").style.width = `${progress}%`;
					percent.innerHTML = `${progress}%`;
					document.querySelector(".progress__bar").style.background = "rgb(44, 211, 114)";
					document.querySelector(".progress__bar span").style.border =
						"1px solid  rgb(44, 211, 114)";
				}
			}
		});

		item.innerHTML = `${input.value}<i></i>`;
		list.appendChild(item);
		input.value = "";

		let total_tasks = list.querySelectorAll("li").length;
		let completed_tasks = list.querySelectorAll("li.done").length;
		if (total_tasks == 0 && completed_tasks == total_tasks) {
			document.querySelector(".progress__bar").style.width = "0%";
			document.querySelector(".progress__bar").style.background = "rgb(255, 61, 61)";
			document.querySelector(".progress__bar").style.border = "1px solid redrgb(255, 61, 61)";
			percent.innerHTML = "0%";
		} else {
			let progress = Math.floor((completed_tasks / total_tasks) * 100);
			if (progress < 35) {
				document.querySelector(".progress__bar").style.width = `${progress}%`;
				document.querySelector(".progress__bar").style.background = "rgb(255, 61, 61)";
				document.querySelector(".progress__bar span").style.border = "1px solid rgb(255, 61, 61)";
				percent.innerHTML = `${progress}%`;
			} else if (progress >= 35 && progress < 70) {
				document.querySelector(".progress__bar").style.width = `${progress}%`;
				document.querySelector(".progress__bar").style.background = "rgb(209, 214, 70)";
				document.querySelector(".progress__bar span").style.border = "1px solid rgb(209, 214, 70)";
				percent.innerHTML = `${progress}%`;
			} else {
				document.querySelector(".progress__bar").style.width = `${progress}%`;
				percent.innerHTML = `${progress}%`;
				document.querySelector(".progress__bar").style.background = " rgb(44, 211, 114)";
				document.querySelector(".progress__bar span").style.border = "1px solid  rgb(44, 211, 114)";
			}
		}

		item.querySelector("i").addEventListener("click", () => {
			item.remove();
		});
	}
});
