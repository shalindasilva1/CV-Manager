# Use the official ASP.NET Core runtime as a parent image
FROM mcr.microsoft.com/dotnet/aspnet:8.0-preview AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

# Use the SDK image to build the app
FROM mcr.microsoft.com/dotnet/sdk:8.0-preview AS build
WORKDIR /src
COPY ["CV-Manager/CV-Manager.csproj", "CV-Manager/"]
RUN dotnet restore "CV-Manager/CV-Manager.csproj"
COPY . .
WORKDIR "/src/CV-Manager"
RUN dotnet build "CV-Manager.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "CV-Manager.csproj" -c Release -o /app/publish

# Use the runtime image to run the app
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "CV-Manager.dll"]