using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CV_Manager.Migrations
{
    public partial class newfield : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AvailableDates",
                table: "Resumes");

            migrationBuilder.AddColumn<long>(
                name: "JobsId",
                table: "Skills",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "DesignationId",
                table: "Resumes",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Resumes",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "CompanyId",
                table: "Jobs",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Status",
                table: "Jobs",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "YearsOfExperience",
                table: "Jobs",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Contacts",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Key = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ResumesId = table.Column<long>(type: "bigint", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contacts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Contacts_Resumes_ResumesId",
                        column: x => x.ResumesId,
                        principalTable: "Resumes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Designations",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Designations", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Skills_JobsId",
                table: "Skills",
                column: "JobsId");

            migrationBuilder.CreateIndex(
                name: "IX_Resumes_DesignationId",
                table: "Resumes",
                column: "DesignationId");

            migrationBuilder.CreateIndex(
                name: "IX_Jobs_CompanyId",
                table: "Jobs",
                column: "CompanyId");

            migrationBuilder.CreateIndex(
                name: "IX_Contacts_ResumesId",
                table: "Contacts",
                column: "ResumesId");

            migrationBuilder.AddForeignKey(
                name: "FK_Jobs_Companies_CompanyId",
                table: "Jobs",
                column: "CompanyId",
                principalTable: "Companies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Resumes_Designations_DesignationId",
                table: "Resumes",
                column: "DesignationId",
                principalTable: "Designations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Skills_Jobs_JobsId",
                table: "Skills",
                column: "JobsId",
                principalTable: "Jobs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Jobs_Companies_CompanyId",
                table: "Jobs");

            migrationBuilder.DropForeignKey(
                name: "FK_Resumes_Designations_DesignationId",
                table: "Resumes");

            migrationBuilder.DropForeignKey(
                name: "FK_Skills_Jobs_JobsId",
                table: "Skills");

            migrationBuilder.DropTable(
                name: "Contacts");

            migrationBuilder.DropTable(
                name: "Designations");

            migrationBuilder.DropIndex(
                name: "IX_Skills_JobsId",
                table: "Skills");

            migrationBuilder.DropIndex(
                name: "IX_Resumes_DesignationId",
                table: "Resumes");

            migrationBuilder.DropIndex(
                name: "IX_Jobs_CompanyId",
                table: "Jobs");

            migrationBuilder.DropColumn(
                name: "JobsId",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "DesignationId",
                table: "Resumes");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Resumes");

            migrationBuilder.DropColumn(
                name: "CompanyId",
                table: "Jobs");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "Jobs");

            migrationBuilder.DropColumn(
                name: "YearsOfExperience",
                table: "Jobs");

            migrationBuilder.AddColumn<DateTime>(
                name: "AvailableDates",
                table: "Resumes",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
