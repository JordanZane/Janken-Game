<!DOCTYPE html>
<html lang="fr">
    <head>
        <?php include 'layout/head.phtml'; ?>
    </head>

    <body>

    <header>
            <?php include 'layout/header.phtml'; ?>
    </header>
    <div id="tsparticles">

    </div>
    <main>
        <div class="container">
            <div class="row button-row">
                <div class="col-lg-2">
                    <button id ="rock-btn">
                        <i class="fa-sharp fa-solid fa-hand-back-fist"></i>
                    </button>
                </div>
                <div class="col-lg-2">
                    <button id ="paper-btn">
                        <i class="fa-solid fa-hand"></i>
                    </button>
                </div>
                <div class="col-lg-2">
                    <button id ="scissors-btn">
                        <i class="fa-solid fa-hand-scissors"></i>
                    </button>
                </div>
            </div>
            <p>Make your choice</p>
            <div class="row scores-row">
                <div class="col-lg-12">
                    <h2>Scores : </h2>
                </div>
                <div class="col-6">
                    <p>You :</p>
                    <div id="score-number-you">
                        <p></p>
                    </div>
                </div>
                <div class="col-6">
                    <p>Computer :</p>
                    <div id="score-number-computer">
                        <p></p>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div id="reset-score-btn">
                        <button>
                            Rénitialiser les scores
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer>
        <?php include 'layout/footer.phtml'; ?>
    </footer>

    <script type="text/javascript" src="scripts/main.js"></script>
   <!-- <script src="tsparticles.engine.min.js"></script> -->
    <script src="https://cdn.jsdelivr.net/npm/tsparticles-engine@2/tsparticles.engine.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/tsparticles-interaction-external-push@2/tsparticles.interaction.external.push.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/tsparticles-move-base@2/tsparticles.move.base.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/tsparticles-shape-circle@2/tsparticles.shape.circle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/tsparticles-updater-color@2/tsparticles.updater.color.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/tsparticles-updater-opacity@2/tsparticles.updater.opacity.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/tsparticles-updater-out-modes@2/tsparticles.updater.out-modes.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/tsparticles-updater-size@2/tsparticles.updater.size.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/tsparticles-preset-fire@2/tsparticles.preset.fire.min.js"></script>
    <script type="text/javascript">
        (async () => {
            await loadFirePreset(tsParticles);
        
            await tsParticles.load("tsparticles", {
            preset: "fire",
            });
        })();
    </script>
    
    </body>