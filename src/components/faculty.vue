<template lang="pug">
  block content
	.page-title
		div
			h1
				i.fa.fa-edit
				|  设施条件
			p 添加高校众创空间或者孵化器

		div
			ul.breadcrumb
				li
					i.fa.fa-home.fa-lg
				li
					| 完善信息
				li
					a(href="#") 设施条件

	.row
		.col-md-12
			.card
				h3.card-title 创业学院空间使用情况
				.card-body
					form

						.form-group
							label.control-label 众创空间数
							input.form-control(type="number",placeholder="个")
						.form-group
							label.control-label 孵化器数
							input.form-control(type="number",placeholder="个")
						.form-group
							label.control-label 创业园数
							input.form-control(type="number",placeholder="个")

				.card-footer
					button.btn.btn-primary.icon-btn(type="button")
						i.fa.fa-fw.fa-lg.fa-check-circle
						| 确定
					| &nbsp;&nbsp;&nbsp;

		.col-md-12
			.card
				h3.card-title 众创空间#1
				form.form-inline
					.form-group
							label.control-label 名称
							input.form-control(type="text")
					.form-group
							label.control-label 面积
							input.form-control(type="number",placeholder="平方米")
					.form-group
							label.control-label 项目数
							input.form-control(type="number",placeholder="个")
					button.btn.btn-primary.icon-btn(type="button")
						i.fa.fa-fw.fa-lg.fa-check-circle
						| 确定
				hr
				form.card-body
					table.table.table-hover.table-bordered#sampleTable
						thead
							tr
								th #
								th 项目名称
								th 所属团队
								th 指导老师
						tbody
							tr
								td 1
								td 
									input.form-control(type="text",value="Ccode项目")
								td 
									input.form-control(type="text",value="Ccode")
								td
									input.form-control(type="text",value="李清水")
				.card-footer
					button.btn.btn-primary.icon-btn(type="button")
						i.fa.fa-fw.fa-lg.fa-check-circle
						| 确定
					| &nbsp;&nbsp;&nbsp;
</template>


<script>
export default {
    props: [],
    data() {
        return {

        }
    },
    mounted() {

    }
}
</script>
