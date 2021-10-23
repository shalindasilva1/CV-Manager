using Microsoft.EntityFrameworkCore.Migrations;

namespace DataAccess.Migrations
{
    public partial class converttomanytomany : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Skills_Jobs_JobsId",
                table: "Skills");

            migrationBuilder.DropIndex(
                name: "IX_Skills_JobsId",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "JobsId",
                table: "Skills");

            migrationBuilder.CreateTable(
                name: "JobsSkills",
                columns: table => new
                {
                    JobsId = table.Column<long>(type: "bigint", nullable: false),
                    TechStackId = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_JobsSkills", x => new { x.JobsId, x.TechStackId });
                    table.ForeignKey(
                        name: "FK_JobsSkills_Jobs_JobsId",
                        column: x => x.JobsId,
                        principalTable: "Jobs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_JobsSkills_Skills_TechStackId",
                        column: x => x.TechStackId,
                        principalTable: "Skills",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_JobsSkills_TechStackId",
                table: "JobsSkills",
                column: "TechStackId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "JobsSkills");

            migrationBuilder.AddColumn<long>(
                name: "JobsId",
                table: "Skills",
                type: "bigint",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Skills_JobsId",
                table: "Skills",
                column: "JobsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Skills_Jobs_JobsId",
                table: "Skills",
                column: "JobsId",
                principalTable: "Jobs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
